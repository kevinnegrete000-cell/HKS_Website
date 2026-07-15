import type { RelationshipCategory } from '../../types/archive';
import { categoryStyle } from './RelationshipGraph';

const categories: RelationshipCategory[] = ['Material', 'Fabrication', 'Typology', 'Geometry', 'Project Phase'];

export function RelationshipLegend() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 px-5 py-3 border-t border-[var(--color-border)]">
      {categories.map((cat) => {
        const style = categoryStyle[cat];
        return (
          <div key={cat} className="flex items-center gap-2">
            <svg width="20" height="6">
              <line x1="0" y1="3" x2="20" y2="3" stroke={style.color} strokeWidth="1.5" strokeDasharray={style.dash} />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">{cat}</span>
          </div>
        );
      })}
    </div>
  );
}
