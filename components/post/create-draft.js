import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_DRAFT } from '../../utils/query';

export default function CreateDraft() {
  let title;
  let content;
  const [createDraft, { data }] = useMutation(CREATE_DRAFT);
  return (
    <div>
      {  }
      <form
        onSubmit={e => {
          e.preventDefault();
          if(title.value && content.value)
          createDraft({ variables: { title: title.value, content: content.value } });
          title.value = '';
          content.value = '';
        }}
      >
        <input
          ref={node => {
            title = node;
          }}
        />
        <input
          ref={node => {
            content = node;
          }}
        />
        <button type="submit">CREATE_DRAFT</button>
      </form>
      <div>
        {
          data ? 
            (<div>
              <div>title: {data.createDraft.title}</div>
              <div>content: {data.createDraft.content}</div>
            </div>) 
          : null
        }
      </div>
    </div>
  );
}