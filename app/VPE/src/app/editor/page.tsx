import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';

import "katex/dist/katex.min.css";

export default function Page() {
  return (
    <div className="h-screen w-full">
      <PlateEditor />

      <Toaster />
    </div>
  );
}
