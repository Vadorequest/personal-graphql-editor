import { GraphQLEditor } from 'graphql-editor';
import { PassedSchema } from 'graphql-editor/lib/Models';
import React, {
  useEffect,
  useState,
} from 'react';
import gitHubLogo from './assets/github-logo-transparent.png';

export const App = () => {
  let defaultGqlEditorSchema: PassedSchema = {
    code: '',
    libraries: '',
  };

  try {
    const gqlEditorSchema: string | null = localStorage.getItem('gqlEditorSchema');

    if (gqlEditorSchema) {
      defaultGqlEditorSchema = JSON.parse(gqlEditorSchema);
      console.log('Schema loaded from local storage.');
    }
  } catch (e) {
    console.error(e);
  }

  const [gqlEditorSchema, setGqlEditorSchema] = useState<PassedSchema>(defaultGqlEditorSchema);

  useEffect(() => {
    localStorage.setItem('gqlEditorSchema', JSON.stringify(gqlEditorSchema));
    console.log('Schema saved to local storage.');
  }, [gqlEditorSchema]);

  console.log('gqlEditorSchema', gqlEditorSchema);

  return (
    <div
      style={{
        flex: 1,
        width: '100vw',
        height: '100vh',
        alignSelf: 'stretch',
        display: 'flex',
        position: 'relative',
      }}
    >
      <GraphQLEditor
        setSchema={setGqlEditorSchema}
        schema={gqlEditorSchema}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          zIndex: 100
        }}
      >
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          href={'https://github.com/Vadorequest/personal-graphql-editor'}
          target={'_blank'}
        >
          <img
            style={{
              width: 20,
              height: 20,
            }}
            src={gitHubLogo}
            alt={'GitHub logo'}
          />
        </a>
      </div>
    </div>
  );
};

export default App;
