import '@mantine/core/styles.css';
import { AppShell, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <AppShell
              header={{ height: 70 }}
              padding="md"
            >
                <AppShell.Header mt={20} mb={20} pl={20}>
                    <img src="https://www.availity.com/-/media/Images/Global/_AV-Logo-CMYK.ashx" width={150} />
                </AppShell.Header>
                <AppShell.Main m={50}>
                    <Router />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
