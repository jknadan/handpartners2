import EvaluateTable from "./_components/evaluate-table";
import PDFViewer from "./_components/pdf-viewer";

export default function Page() {
  return (
    <div className="flex w-full p-4 gap-2 h-screen bg-blue-50">
      <div className="flex flex-col w-1/2 p-2">
        <div className="space-y-2 text-gray-600">
          <p className="text-gray-700">F240430hon12503 | sdf | sdf | sdf</p>
          <p>SC</p>
          <p>테스트 설명2</p>
        </div>
        <EvaluateTable />
      </div>
      <div className="flex flex-col w-1/2 h-full justify-center bg-green-50 p-4">
        <PDFViewer />
      </div>
    </div>
  );
}
