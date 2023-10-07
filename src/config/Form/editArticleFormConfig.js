import TagsFragment from '../../components/Fragments/TagsFragment/TagsFragment';

const editArticleFormConfig = {
  title: 'Create new article',
  inputs: [
    {
      id: 'title',
      type: 'text',
      label: 'Title',
      validate: {
        name: 'validateTitle',
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
        name: 'validateDescription',
        rules: {
          required: true,
        },
        errors: [{ type: 'required', message: 'Description is required' }],
      },
    },
    {
      id: 'text',
      type: 'text',
      tagType: 'textarea',
      label: 'Text',
      validate: {
        name: 'validateTextarea',
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

export { editArticleFormConfig };
