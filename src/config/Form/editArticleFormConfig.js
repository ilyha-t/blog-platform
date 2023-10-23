import TagsFragment from '../../components/Fragments/TagsFragment/TagsFragment';

function editArticleFormConfig(article) {
  return {
    title: 'Edit article',
    inputs: [
      {
        id: 'title',
        type: 'text',
        label: 'Title',
        value: article.title,
        validate: {
          name: 'title',
          rules: {
            required: true,
            pattern: /^(?!\s*$).+/,
          },
          errors: [
            { type: 'required', message: 'Title is required' },
            { type: 'pattern', message: 'Description is not be empty' },
          ],
        },
      },
      {
        id: 'description',
        type: 'text',
        label: 'Short description',
        value: article.description,
        validate: {
          name: 'description',
          rules: {
            required: true,
            pattern: /^(?!\s*$).+/,
          },
          errors: [
            { type: 'required', message: 'Description is required' },
            { type: 'pattern', message: 'Description is not be empty' },
          ],
        },
      },
      {
        id: 'body',
        type: 'text',
        tagType: 'textarea',
        label: 'Text',
        value: article.body,
        validate: {
          name: 'body',
          rules: { required: true, pattern: /^(?!\s*$).+/ },
          errors: [
            { type: 'required', message: 'Text is required' },
            { type: 'pattern', message: 'Text is not be empty' },
          ],
        },
        styles: {
          height: '160px',
        },
      },
    ],
    otherContent: <TagsFragment />,
    contentBtn: 'Send',
    contentBtnStyle: {
      width: '320px',
    },
  };
}

export { editArticleFormConfig };
