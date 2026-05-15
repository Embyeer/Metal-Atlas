import React, { useEffect, useRef, useMemo, useState } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'motion/react';
import { Genre, GENRES } from '../data/genres';

interface MetalGraphProps {
  selectedId: string;
  onSelectGenre: (id: string) => void;
}

interface Node extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  color: string;
  outDegree: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string;
  target: string;
}

const MetalGraph: React.FC<MetalGraphProps> = ({ selectedId, onSelectGenre }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<Genre | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const data = useMemo(() => {
    const nodes: Node[] = GENRES.map(g => {
      // Out-degree = how many genres list THIS genre as an influence
      const outDegree = GENRES.filter(other => other.influences.includes(g.id)).length;
      return {
        id: g.id,
        name: g.name,
        color: g.color,
        outDegree,
      };
    });

    const links: Link[] = [];
    GENRES.forEach(g => {
      g.influences.forEach(infId => {
        links.push({
          source: infId,
          target: g.id,
        });
      });
    });

    return { nodes: JSON.parse(JSON.stringify(nodes)), links: JSON.parse(JSON.stringify(links)) };
  }, []);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    // Markers for Arrows
    const defs = svg.append('defs');
    
    // Default marker
    defs.append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '-0 -5 10 10')
      .attr('refX', 22)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('xoverflow', 'visible')
      .append('svg:path')
      .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
      .attr('fill', 'rgba(255,255,255,0.2)')
      .style('stroke', 'none');

    // Genre-specific markers (Normal and Hover versions)
    GENRES.forEach(g => {
      // Normal state marker
      defs.append('marker')
        .attr('id', `arrowhead-${g.id}`)
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 22)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 3.5)
        .attr('markerHeight', 3.5)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', g.color)
        .attr('opacity', 0.4);

      // Hover/Active state marker (Larger)
      defs.append('marker')
        .attr('id', `arrowhead-active-${g.id}`)
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 22)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 5.5) 
        .attr('markerHeight', 5.5)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', g.color)
        .attr('opacity', 1);
    });

    // Zoom setup
    const g = svg.append('g');
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    const simulation = d3.forceSimulation<Node>(data.nodes)
      .force('link', d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(280))
      .force('charge', d3.forceManyBody().strength(-1800))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(100))
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1));

    // Fix Heavy Metal in the center
    const rootNode = data.nodes.find(n => n.id === 'heavy-metal');
    if (rootNode) {
      rootNode.fx = width / 2;
      rootNode.fy = height / 2;
    }

    // Links
    const link = g.append('g')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke', 'rgba(255,255,255,0.06)') // Even subtler links
      .attr('stroke-width', 1.5)
      .attr('marker-end', (l: any) => `url(#arrowhead-${l.source.id})`);

    // Particles Group for flow animation
    const particlesG = g.append('g').attr('class', 'particles').style('pointer-events', 'none');

    // Nodes container
    const node = g.append('g')
      .selectAll('.node')
      .data(data.nodes)
      .join('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .on('click', (event: any, d: Node) => {
        setHoveredNode(null);
        onSelectGenre(d.id);
      })
      .on('mouseenter', (event: any, d: Node) => {
        if (selectedId) return; 
        const genre = GENRES.find(g => g.id === d.id);
        if (genre) setHoveredNode(genre);
        
        // Scale and highlight hovered node
        const nodeSize = 10 + d.outDegree * 2.5;
        d3.select(event.currentTarget).select('circle')
          .transition()
          .duration(300)
          .attr('r', nodeSize + 6)
          .attr('stroke', d.color)
          .attr('stroke-width', 4)
          .style('filter', `drop-shadow(0 0 15px ${d.color})`);
        
        d3.select(event.currentTarget).select('text')
          .transition()
          .duration(300)
          .attr('fill', '#fff')
          .attr('dy', -(nodeSize + 16))
          .style('font-size', '13px');

        // Highlight and expand incoming links pointing to this node (Parents)
        link.filter((l: any) => l.target.id === d.id)
          .transition()
          .duration(400)
          .attr('stroke', (l: any) => l.source.color)
          .attr('stroke-width', 4)
          .attr('stroke-dasharray', 'none')
          .attr('opacity', 1)
          .attr('marker-end', (l: any) => `url(#arrowhead-active-${l.source.id})`);

        // Highlight and expand outgoing links from this node (Children/Sons)
        link.filter((l: any) => l.source.id === d.id)
          .transition()
          .duration(400)
          .attr('stroke', d.color)
          .attr('stroke-width', 3)
          .attr('stroke-dasharray', '6,4')
          .attr('opacity', 1)
          .attr('marker-end', (l: any) => `url(#arrowhead-active-${l.source.id})`);
        
        // Dim other links
        link.filter((l: any) => l.target.id !== d.id && l.source.id !== d.id)
          .transition()
          .duration(400)
          .attr('opacity', 0.02);
      })
      .on('mouseleave', (event: any, d: Node) => {
        setHoveredNode(null);
        
        // Reset node style
        const isSelected = d.id === selectedId;
        const baseSize = 8 + d.outDegree * 2;
        const finalSize = isSelected ? baseSize + 6 : baseSize;

        d3.select(event.currentTarget).select('circle')
          .transition()
          .duration(300)
          .attr('r', finalSize)
          .attr('stroke', isSelected ? '#f97316' : '#111')
          .attr('stroke-width', isSelected ? 3 : 2)
          .style('filter', isSelected ? 'drop-shadow(0 0 12px rgba(249,115,22,0.8))' : 'none');

        d3.select(event.currentTarget).select('text')
          .transition()
          .duration(300)
          .attr('fill', isSelected ? '#fff' : '#666')
          .attr('dy', -(finalSize + 12))
          .style('font-size', d.id === 'heavy-metal' ? '16px' : (isSelected ? '12px' : '10px'));

        // Reset all links
        link.transition()
          .duration(600)
          .attr('stroke', 'rgba(255,255,255,0.06)')
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', 'none')
          .attr('opacity', 1)
          .attr('marker-end', (l: any) => `url(#arrowhead-${l.source.id})`);
      })
      .on('mousemove', (event: any) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      });

    // Node Circle
    node.append('circle')
      .attr('r', (d: Node) => {
        const baseSize = 8 + d.outDegree * 2;
        if (d.id === selectedId) return baseSize + 6;
        return baseSize;
      })
      .attr('fill', (d: Node) => d.id === selectedId ? '#f97316' : '#111')
      .attr('stroke', (d: Node) => d.id === selectedId ? '#f97316' : '#111')
      .attr('stroke-width', (d: Node) => d.id === selectedId ? 3 : 2)
      .style('filter', (d: Node) => d.id === selectedId ? 'drop-shadow(0 0 12px rgba(249,115,22,0.8))' : 'none');

    // Node Text
    node.append('text')
      .text((d: Node) => d.name.toUpperCase())
      .attr('font-size', (d: Node) => d.id === 'heavy-metal' ? '16px' : (d.id === selectedId ? '12px' : '10px'))
      .attr('font-weight', '900')
      .attr('fill', (d: Node) => d.id === selectedId ? '#fff' : '#666')
      .attr('text-anchor', 'middle')
      .attr('dy', (d: Node) => {
        const baseSize = 8 + d.outDegree * 2;
        const sizeOffset = d.id === selectedId ? 6 : 0;
        return -(baseSize + sizeOffset + 12);
      })
      .style('pointer-events', 'none')
      .style('font-family', 'var(--font-mono)')
      .style('letter-spacing', '0.2em')
      .style('text-shadow', '0 2px 4px rgba(0,0,0,0.8)');

    // Flow Animation Timer
    const particleTimer = d3.timer((elapsed) => {
      if (!selectedId) {
        particlesG.selectAll('*').remove();
        return;
      }

      // Find links where the target is the selected genre
      const activeLinks = data.links.filter((l: any) => {
        const targetId = (l.target && typeof l.target === 'object') ? l.target.id : l.target;
        return targetId === selectedId;
      });

      const particlesData: any[] = [];
      
      activeLinks.forEach((l: any) => {
        const sx = l.source.x;
        const sy = l.source.y;
        const tx = l.target.x;
        const ty = l.target.y;

        if (sx === undefined || sy === undefined || tx === undefined || ty === undefined) return;

        // Number of arrowheads in flow
        const numParticles = 6;
        for (let i = 0; i < numParticles; i++) {
          const offset = i / numParticles;
          const t = ((elapsed / 2500) + offset) % 1; // Movement speed
          
          // Position along the link path
          const x = sx + (tx - sx) * t;
          const y = sy + (ty - sy) * t;
          
          // Angle of rotation
          const angle = Math.atan2(ty - sy, tx - sx) * 180 / Math.PI;

          const sourceId = (l.source && typeof l.source === 'object') ? l.source.id : l.source;
          const targetId = (l.target && typeof l.target === 'object') ? l.target.id : l.target;

          particlesData.push({
            id: `${sourceId}-${targetId}-${i}`,
            x, y, angle,
            color: (l.source && typeof l.source === 'object') ? l.source.color : '#f97316'
          });
        }
      });

      const selection = particlesG.selectAll('path')
        .data(particlesData, (d: any) => d.id);

      selection.enter()
        .append('path')
        .attr('d', 'M -4,-3 L 4,0 L -4,3 Z') // Refined arrowhead size
        .attr('opacity', 0.9)
        .merge(selection as any)
        .attr('transform', d => `translate(${d.x},${d.y}) rotate(${d.angle})`)
        .attr('fill', d => d.color);

      selection.exit().remove();
    });

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
      particleTimer.stop();
    };
  }, [data, selectedId, onSelectGenre]);

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.5] pointer-events-none select-none">
        <img 
          src="https://i.ibb.co/QvPk6LXQ/text-1778831022265.png" 
          alt=""
          className="w-[80%] max-w-5xl invert brightness-150 rendering-pixelated"
        />
      </div>

      <svg ref={svgRef} className="w-full h-full relative z-10" />
      
      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ 
              position: 'fixed', 
              left: mousePos.x + 20, 
              top: mousePos.y + 20,
              zIndex: 100 
            }}
            className="pointer-events-none p-4 bg-black/90 border border-orange-500/30 rounded shadow-2xl backdrop-blur-xl max-w-[240px]"
          >
            <h4 className="text-orange-500 font-black text-xs uppercase tracking-widest mb-1">{hoveredNode.name}</h4>
            <p className="text-[10px] text-zinc-400 leading-relaxed uppercase tracking-tight">{hoveredNode.description}</p>
            <div className="mt-2 pt-2 border-t border-white/10 flex justify-between items-center">
              <span className="text-[8px] text-zinc-600 font-mono italic">INFLUENCES: {hoveredNode.influences.length}</span>
              <span className="text-[8px] text-zinc-600 font-mono italic">BANDS: {hoveredNode.bands.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MetalGraph;
