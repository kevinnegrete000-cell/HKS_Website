import { useState } from 'react';
import { ArchiveHeader } from './components/shell/ArchiveHeader';
import { ObservatoryCanvas } from './components/observatory/ObservatoryCanvas';
import { ArchiveDetailPanel } from './components/panel/ArchiveDetailPanel';
import { SearchOverlay } from './components/search/SearchOverlay';
import { RelationshipsView } from './components/relationships/RelationshipsView';
import { TimelineView } from './components/timeline/TimelineView';
import { AboutView } from './components/about/AboutView';
import { GrainOverlay } from './components/common/GrainOverlay';
import { archiveObjects } from './data/archiveObjects';

export type ViewName = 'observatory' | 'relationships' | 'timeline' | 'about';

export default function App() {
  const [view, setView] = useState<ViewName>('observatory');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [focusRequest, setFocusRequest] = useState<{ id: string; nonce: number } | null>(null);

  const selectedItem = archiveObjects.find((i) => i.id === selectedId) ?? null;

  const openFromAnywhere = (id: string) => {
    setSelectedId(id);
    setView('observatory');
    setSearchOpen(false);
    setFocusRequest({ id, nonce: Date.now() });
  };

  return (
    <div className="relative w-full h-full">
      <ArchiveHeader
        activeView={view}
        onNavigate={(v) => {
          setView(v);
          setSelectedId(null);
        }}
        onOpenSearch={() => setSearchOpen(true)}
        itemCount={archiveObjects.length}
      />

      <main className="fixed inset-0 pt-14">
        {view === 'observatory' && (
          <ObservatoryCanvas
            items={archiveObjects}
            selectedId={selectedId}
            onSelect={setSelectedId}
            focusRequest={focusRequest}
          />
        )}
        {view === 'relationships' && (
          <RelationshipsView items={archiveObjects} onOpenDetail={openFromAnywhere} />
        )}
        {view === 'timeline' && <TimelineView items={archiveObjects} onOpenDetail={openFromAnywhere} />}
        {view === 'about' && <AboutView />}
      </main>

      {view === 'observatory' && (
        <ArchiveDetailPanel
          item={selectedItem}
          onClose={() => setSelectedId(null)}
          onExploreRelationships={() => {
            setView('relationships');
          }}
        />
      )}

      <SearchOverlay
        open={searchOpen}
        items={archiveObjects}
        onClose={() => setSearchOpen(false)}
        onSelect={(id) => openFromAnywhere(id)}
      />

      <GrainOverlay />
    </div>
  );
}
