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
    const nodes: Node[] = GENRES.map(g => ({
      id: g.id,
      name: g.name,
      color: g.color,
    }));

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

    // Genre-specific markers
    GENRES.forEach(g => {
      defs.append('marker')
        .attr('id', `arrowhead-${g.id}`)
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 22)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', g.color)
        .style('stroke', 'none');
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
      .force('link', d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(180))
      .force('charge', d3.forceManyBody().strength(-800))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(100));

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
      .attr('stroke', 'rgba(255,255,255,0.15)')
      .attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#arrowhead)');

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
        if (selectedId) return; // Don't show tooltip if a modal is open
        const genre = GENRES.find(g => g.id === d.id);
        if (genre) setHoveredNode(genre);
        
        // Scale and highlight hovered node
        d3.select(event.currentTarget).select('circle')
          .transition()
          .duration(200)
          .attr('r', 14)
          .attr('stroke', d.color)
          .attr('stroke-width', 3);
        
        d3.select(event.currentTarget).select('text')
          .transition()
          .duration(200)
          .attr('fill', '#fff')
          .attr('dy', -25);

        // Highlight and colorized incoming links (arrows pointing to this node)
        link.filter((l: any) => l.target.id === d.id)
          .transition()
          .duration(300)
          .attr('stroke', (l: any) => l.source.color)
          .attr('stroke-width', 3)
          .attr('opacity', 1)
          .attr('marker-end', (l: any) => `url(#arrowhead-${l.source.id})`);
        
        // Dim other links for clarity
        link.filter((l: any) => l.target.id !== d.id)
          .transition()
          .duration(300)
          .attr('opacity', 0.1);
      })
      .on('mouseleave', (event: any, d: Node) => {
        setHoveredNode(null);
        
        // Reset node style
        d3.select(event.currentTarget).select('circle')
          .transition()
          .duration(200)
          .attr('r', d.id === selectedId ? 10 : 6)
          .attr('stroke', d.id === selectedId ? '#f97316' : '#111')
          .attr('stroke-width', 2);

        d3.select(event.currentTarget).select('text')
          .transition()
          .duration(200)
          .attr('fill', d.id === selectedId ? '#fff' : '#666')
          .attr('dy', -20);

        // Reset all links
        link.transition()
          .duration(300)
          .attr('stroke', 'rgba(255,255,255,0.15)')
          .attr('stroke-width', 1.5)
          .attr('opacity', 1)
          .attr('marker-end', 'url(#arrowhead)');
      })
      .on('mousemove', (event: any) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      });

    // Node Circle
    node.append('circle')
      .attr('r', (d: Node) => d.id === selectedId ? 10 : 6)
      .attr('fill', (d: Node) => d.id === selectedId ? '#f97316' : '#333')
      .attr('stroke', (d: Node) => d.id === selectedId ? '#f97316' : '#111')
      .attr('stroke-width', 2)
      .style('filter', (d: Node) => d.id === selectedId ? 'drop-shadow(0 0 12px rgba(249,115,22,0.8))' : 'none');

    // Node Text
    node.append('text')
      .text((d: Node) => d.name.toUpperCase())
      .attr('font-size', '10px')
      .attr('font-weight', '900')
      .attr('fill', (d: Node) => d.id === selectedId ? '#fff' : '#666')
      .attr('text-anchor', 'middle')
      .attr('dy', -20)
      .style('pointer-events', 'none')
      .style('font-family', 'var(--font-mono)')
      .style('letter-spacing', '0.2em')
      .style('text-shadow', '0 2px 4px rgba(0,0,0,0.5)');

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
    };
  }, [data, selectedId, onSelectGenre]);

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <svg ref={svgRef} className="w-full h-full" />
      
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
