import { skills } from '@/lib/data/skills';
import { SkillDetailClient } from './skill-detail-client';

export function generateStaticParams() {
  return skills.map(skill => ({
    slug: skill.slug,
  }));
}

export default function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <SkillDetailClient params={params} />;
}
