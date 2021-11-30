import './index.scss';

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
`;

const App = () => {
  return <StyledDiv className="test"> react app ts </StyledDiv>;
};

export default App;
