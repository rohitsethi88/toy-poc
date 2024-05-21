import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Flex, Heading } from '@react-yuki/ui';
import { theme } from 'app/configs/styles';
import { GlobalStyles, Container, PageHeading } from 'app/components/styledComponents';
import Table from 'app/components/table';
import Command from 'app/containers/Command';
import createStore from 'app/utils/store';
import Footer from 'app/components/footer';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container width={1} flexDirection="column">
          <Heading fontSize={13} fontWeight={1} color="orange.4" m={0} mb={4}>
            Toy Robot Simulator
          </Heading>
          <PageHeading>{`Let's play with the robot`}</PageHeading>
          <Flex flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}>
            <Command />
            <Table />
          </Flex>
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
