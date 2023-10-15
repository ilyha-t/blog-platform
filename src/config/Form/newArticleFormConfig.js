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
          required: true,
        },
        errors: [{ type: 'required', message: 'Title is required' }],
      },
    },
    {
      id: 'description',
      type: 'text',
      label: 'Short description',
      validate: {
        name: 'description',
        rules: {
          required: true,
        },
        errors: [{ type: 'required', message: 'Description is required' }],
      },
    },
    {
      id: 'body',
      type: 'text',
      tagType: 'textarea',
      label: 'Text',
      validate: {
        name: 'body',
        rules: { required: true },
        errors: [{ type: 'required', message: 'Text is required' }],
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
