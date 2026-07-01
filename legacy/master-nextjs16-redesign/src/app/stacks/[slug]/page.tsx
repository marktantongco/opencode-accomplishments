import { mcpStacks } from '@/lib/data/stacks';
import { StackDetailClient } from './stack-detail-client';

export function generateStaticParams() {
  return mcpStacks.map(stack => ({
    slug: stack.id,
  }));
}

export default function StackDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <StackDetailClient params={params} />;
}
