import React, { Component } from 'react';

// The Bulma components for this page
import { Hero, Columns, Button, Form, Content, Heading } from 'react-bulma-components';

const heroContent = [
    {
        heading: "Key Areas of Expertise",
        content: <p>Over the past <strong>{(new Date().getFullYear() - 2009)} years</strong>, I have had roles as a product developer, a senior engineer, even as Director of Business Development. I've compiled a list of the skills I consider most important.</p>
    },
    {
        heading: "WordPress Engineering",
        content: <p>From extension of the REST API to Gutenberg blocks, implementation of a custom visual design, to augmentaiton of popular plugins like Gravity Forms and Advanced Cust Fields, I have worked deep in WordPress.</p>
    },
    {
        heading: "Business Development",
        content: <p>Whether leading an initial sales call or translating business goals into technical requirements, I have broad experience in technical, consultative sales in an agency setting.</p>
    },
    {
        heading: "Search Engine Optimization",
        content: <p>My specific focus is on technical SEO, which includes everything from basic metadata and sitemaps, to Schema.org integration, server responses, and performance (both on the server and in the browser).</p>
    },
    {
        heading: "Analytics &amp; Data",
        content: <p>Leveraging a diverse set of data sources, from Google Analytics and Hotjar, to more advanced integrations like Segment.io and raw server log analysis, I parse and analyze datasets to gain business insights.</p>
    },
    {
        heading: "Contact Me",
        content: <>
            <p>Does my experience sound like it might be a good fit for you or your organization?</p>
            <Form.Field>
                <Form.Control>
                    <Button
                        renderAs="a"
                        href="mailto:mattonomics@gmail.com"
                        id="contact"
                        outlined
                    >
                        Contact Matthew &rarr;
                        </Button>
                </Form.Control>
            </Form.Field>
        </>
    }
];

class HeaderHero extends Component {
    createHeroContent(item) {
        const { Column } = Columns;
        return (
            <Column size={6} desktop={{ size: 'full' }} widescreen={{ size: 'half' }}>
                <Content>
                    <Heading size={4}>{item.heading}</Heading>
                    <Content>
                        {item.content}
                    </Content>
                </Content>
            </Column>
        );
    }
    render() {
        const { Body } = Hero;
        const { Column } = Columns;
        const { Field, Control } = Form;

        return (
            <>
                <Hero hasNavbar>
                    <Body>
                        <Columns>
                            <Column size={5}>
                                <Content>
                                    <h1 className="title is-2">
                                        Professional Problem Solver.
                                    </h1>
                                    <p>
                                        I solve complex marketing and business problems on the web with open source software like WordPress, a deep knowledge of SEO &amp; Analytics, and experience in enterprise consulting.
                                    </p>
                                    <p>
                                        Whether I'm writing object-oriented PHP in a custom WordPress plugin, building a custom React app (like this site!), assessing a site's technical SEO, reporting on Analytics data, or leading a pre-sales discovery call with a potential client, I bring the same high-energy, and commitment to professional outcomes.
                                    </p>
                                    <Field>
                                        <Control>
                                            <Button
                                                renderAs="a"
                                                href="mailto:mattonomics@gmail.com"
                                                id="contact"
                                                outlined
                                            >
                                                Contact Matthew &rarr;
                                            </Button>
                                        </Control>
                                    </Field>
                                </Content>
                            </Column>
                            <Column size={6} offset={1}>
                                <Columns>
                                    {heroContent.map((item) => this.createHeroContent(item))}
                                </Columns>
                            </Column>
                        </Columns>
                    </Body>
                </Hero>
            </>
        );
    }
}

export default HeaderHero;