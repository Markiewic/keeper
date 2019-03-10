import React, { Component } from 'react';
import { Header, VerticalVector, Separator, Layout } from '../Elements';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header>Rkeeper</Header>
                <Layout>
                    <VerticalVector>
                        <Separator label="This is Root of Rkeeper" />
                    </VerticalVector>
                </Layout>
            </React.Fragment>
        );
    }
}

export default Main;