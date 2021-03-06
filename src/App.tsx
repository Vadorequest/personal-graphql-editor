import { GraphQLEditor } from 'graphql-editor';
import { PassedSchema } from 'graphql-editor/lib/Models';
import React, { useState } from 'react';

const schemas = {
  pizza: `
type Query{
  pizzas: [Pizza!]
}
`,
  pizzaLibrary: `
type Pizza{
  name: String
}
`,
};

export const App = () => {
  const [mySchema, setMySchema] = useState<PassedSchema>({
    code: schemas.pizza,
    libraries: schemas.pizzaLibrary,
  });

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'stretch',
        display: 'flex',
        position: 'relative',
      }}
    >
      <GraphQLEditor
        // @ts-ignore
        onSchemaChange={(props) => {
          setMySchema(props);
        }}
        schema={mySchema}
      />
    </div>
  );
};

export default App;
