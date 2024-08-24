import { EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

const RichTextRenderer = ({ rawContent }: { rawContent: string }) => {
  let contentState;

  try {
    const parsedContent = JSON.parse(rawContent); // Parse the string back to an object

    if (parsedContent && parsedContent.blocks) {
      contentState = convertFromRaw(parsedContent);
    } else {
      return <div>No content available</div>;
    }
  } catch (error) {
    console.error('Error parsing rawContent:', error);
    return <div>Error rendering content</div>;
  }
  const editorState = EditorState.createWithContent(contentState);
  const html = stateToHTML(editorState.getCurrentContent());

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RichTextRenderer;
