import { agentModes } from '@/lib/data/agents';
import { AgentModeDetailClient } from './agent-mode-detail-client';

export function generateStaticParams() {
  return agentModes.map(mode => ({
    slug: mode.id,
  }));
}

export default function AgentModeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <AgentModeDetailClient params={params} />;
}
