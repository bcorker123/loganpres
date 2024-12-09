import { Button, Center, SimpleGrid } from "@mantine/core";
import React from "react";

function NavBar() {
    return (
        <>
            <Center>
                <h1>LOGAN MEMORIAL PRESBYTERIAN CHURCH</h1>
            </Center>
            <SimpleGrid cols={5}>
                <Button>Home</Button>
                <Button>Contact</Button>
                <Button>Missions</Button>
                <Button>Grow Groups and Bible Studies</Button>
                <Button>Faces of Logan</Button>
            </SimpleGrid>
        </>
    );
}

export default NavBar;
