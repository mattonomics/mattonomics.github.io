import React, { Component } from 'react';
import { Navbar, Button, Container } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWordpress, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons/';


const { Brand, Item, Menu } = Navbar;

const myInterests = [
    faWordpress, faPhp, faReact, faDatabase
];

const navLinks = [
    /* { label: "Resumé", color: "success", url: "#", icon: faFileAlt }, */
    { label: "GitHub", color: "dark", url: "https://github.com/mattonomics/", icon: faGithub },
    { label: "LinkedIn", color: "link", url: "https://linkedin.com/in/matthewsgross", icon: faLinkedin },
];


class Navigation extends Component {
    constructor(props) {
        super(props);

        // where the navbar should be. empty for non-static top
        this.navFixed = "top";
    }

    render() {
        return (
            <>
                <Navbar
                    fixed={this.navFixed}
                >
                    <Container>
                        <Brand>
                            <Item>Matthew S. Gross</Item>
                        </Brand>
                        <Menu style={{ marginRight: "0" }}>
                            <Navbar.Container>
                                {myInterests.map(
                                    (interest, i) => {
                                        return (
                                            <Item renderAs="span" key={i}>
                                                <FontAwesomeIcon
                                                    icon={interest}
                                                    style={{ marginRight: ".25em" }}
                                                />
                                            </Item>
                                        );
                                    }
                                )}
                            </Navbar.Container>
                            <Navbar.Container position="end">
                                {navLinks.map(
                                    (link, i) => {
                                        return (
                                            <Item key={i} renderAs="span">
                                                <Button
                                                    renderAs="a"
                                                    href={link.url}
                                                    outlined
                                                    color={link.color}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={link.icon}
                                                        style={{ marginRight: ".25em" }}
                                                    />
                                                    {link.label}
                                                </Button>
                                            </Item>
                                        );
                                    }
                                )}
                            </Navbar.Container>
                        </Menu>
                    </Container>
                </Navbar >
            </>
        );
    }
}

export default Navigation;