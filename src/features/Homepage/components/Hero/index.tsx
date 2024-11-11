import { Icon } from "@iconify/react";
import { Box, Button, Divider, Flex, Group, Stack, Text, UnstyledButton } from "@mantine/core";

import classes from "./styles.module.css";

export default function Hero() {
    return (
        <Stack
            pt={120}
            h={"100dvh"}
            align={"left"}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
                backgroundSize: "80%",
                backgroundImage: "url('/bg/hero_bg.png')",
            }}
        >
            <Stack maw={1280} w={"100%"} mx={"auto"} gap={40}>
                <Box>
                    <Text fz={86} fw={200} c={"#fff"}>
                        Guess...
                    </Text>
                    <Text fz={86} fw={200} c={"#fff"}>
                        Who is the{" "}
                        <Text fz={86} fw={600} td={"underline"} c={"deep-red.8"} span>
                            Mafia
                        </Text>
                        ?
                    </Text>
                </Box>
                <Box>
                    <Text fz={26} fw={300}>
                        Create your account and Join the rooms
                    </Text>
                    <Text fz={36} fw={300}>
                        to find out who us{" "}
                        <Text fz={36} fw={600} td={"underline"} c={"deep-red.8"} span>
                            lying
                        </Text>
                        ?
                    </Text>
                    <Group mt={20} gap={40} wrap={"nowrap"}>
                        <Button radius={"lg"} size={"lg"}>
                            Create Account
                        </Button>
                        <Button
                            style={{ borderWidth: 2 }}
                            w={184}
                            variant={"outline"}
                            radius={"lg"}
                            size={"lg"}
                        >
                            Join Room
                        </Button>
                    </Group>
                </Box>
                <Flex w={"100%"}>
                    <Stack w={"100%"}>
                        <Text fz={36} fw={300}>
                            Follow Us:
                        </Text>
                        <Flex gap={80} w={"100%"} align={"center"}>
                            <Group gap={20} wrap={"nowrap"}>
                                <UnstyledButton className={classes.social}>
                                    <Icon icon="fa6-brands:x-twitter" width="24" height="24" />
                                </UnstyledButton>
                                <UnstyledButton className={classes.social}>
                                    <Icon icon="ph:telegram-logo-light" width="24" height="24" />
                                </UnstyledButton>
                                <UnstyledButton className={classes.social}>
                                    <Icon icon="ri:facebook-fill" width="24" height="24" />
                                </UnstyledButton>
                            </Group>
                            <Divider
                                size={"sm"}
                                w={"100%"}
                                color={"#9f9f9f"}
                                className={classes.divider}
                            />
                        </Flex>
                    </Stack>
                </Flex>
            </Stack>
        </Stack>
    );
}
