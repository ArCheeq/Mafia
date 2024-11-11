import { Box, Button, Flex, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import { routes } from "@/features/Header/constants/routes";

import classes from "./styles.module.css";

export default function Header() {
    return (
        <Box className={"fixed top-0 left-0 w-full"} p={20}>
            <Box maw={1280} m={"auto"}>
                <Flex align={"center"} justify={"space-between"}>
                    <Image
                        src="/logos/logo.png"
                        alt="Liar's Night Logo"
                        width={75}
                        height={75}
                        priority
                    />
                    <Flex gap={60}>
                        {routes.map((route) => (
                            <UnstyledButton
                                variant={"transparent"}
                                className={classes.navlink}
                                key={route.id}
                                component={Link}
                                href={route.link}
                            >
                                {route.label}
                            </UnstyledButton>
                        ))}
                    </Flex>
                    <Flex gap={16}>
                        <Button radius={"xl"} variant={"outline"}>
                            Login
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}
