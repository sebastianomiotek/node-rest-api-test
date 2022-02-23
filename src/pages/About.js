import React from 'react';

import {
  useRouteMatch,
  useParams
} from "react-router-dom";

export default () => {
  let match = useRouteMatch();
  let params = useParams();

  console.log('match: ', match);
  console.log('params: ', params);

  return <h1>About page</h1>
};
