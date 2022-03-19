export type FileContentProps = {
  contents?: string;
};

function FileContent({ contents }: FileContentProps) {
  return (
    <div className="file-content-wrapper">
      <div className="file-content">
        <pre className="file-content-code">{contents}</pre>
      </div>
    </div>
  );
}

export default FileContent;
