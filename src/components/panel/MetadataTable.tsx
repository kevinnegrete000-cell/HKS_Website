import type { ArchiveObject } from '../../types/archive';

interface MetadataTableProps {
  item: ArchiveObject;
}

export function MetadataTable({ item }: MetadataTableProps) {
  const rows: [string, string][] = [
    ['Year', String(item.year)],
    ['Geographic Location Code', item.location],
    ['Project Typology', item.typology],
    ['Prototype Type', item.prototypeType],
    ['Material', item.material],
    ['Fabrication Method', item.fabricationMethod],
    ['Project Phase', item.projectPhase],
    ['Archive Accession Number', item.accessionNumber],
  ];

  return (
    <table className="w-full border-collapse">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="border-t border-[var(--color-border)] first:border-t-0">
            <td className="py-2 pr-4 align-top text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)] w-[46%]">
              {label}
            </td>
            <td className="py-2 align-top text-[13px] text-[var(--color-text-primary)]">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
