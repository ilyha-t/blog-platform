import TagsFragment from '../../components/Fragments/TagsFragment/TagsFragment';

const newArticleFormConfig = {
  title: 'Create new article',
  inputs: [
    {
      id: 'title',
      type: 'text',
      label: 'Title',
      validate: {
        name: 'title',
        rules: {
          pattern: /^(?!\s*$).+/,
          required: true,
        },
        errors: [
          { type: 'required', message: 'Title is required' },
          { type: 'pattern', message: 'Title is not be empty' },
        ],
      },
    },
    {
      id: 'description',
      type: 'text',
      label: 'Short description',
      validate: {
        name: 'description',
        rules: {
          pattern: /^(?!\s*$).+/,
          required: true,
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
      validate: {
        name: 'body',
        rules: { pattern: /^(?!\s*$).+/, required: true },
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

export { newArticleFormConfig };
