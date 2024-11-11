import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    Divider,
    Flex,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    UnstyledButton,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <Box className={"h-full min-h-screen w-full overflow-y-scroll"}>
            <Flex>
                <Box
                    className={
                        "relative right-0  top-0 hidden min-h-screen w-full max-w-[90rem]  select-none overflow-clip bg-gradient-login lg:inline-block"
                    }
                >
                    <Image fill={true} objectFit={"cover"} src={"/bg/auth-bg.png"} alt={"Login"} />
                </Box>
                <Box className={"my-auto w-full"}>
                    <Box className={"w-full"}>
                        <Box
                            className={
                                "flex w-full items-center justify-center px-[2.4rem] pb-[3.2rem] sm:p-0"
                            }
                        >
                            <Stack gap={24} align={"center"} className={"w-full max-w-[25rem]"}>
                                <Stack gap={0} align={"center"}>
                                    <Text fz={24} fw={600}>
                                        Sign in to your account
                                    </Text>
                                    <Text>Enter your email to sign in for this app</Text>
                                </Stack>
                                <Stack className={"w-full"} align={"center"}>
                                    <TextInput w={"100%"} placeholder={"email@domain.com"} />
                                    <PasswordInput w={"100%"} placeholder={"password..."} />
                                    <Button w={"100%"}>Sign in with email</Button>
                                    <Flex w={"100%"} align={"center"} justify={"space-between"}>
                                        <UnstyledButton
                                            fw={600}
                                            component={Link}
                                            href={"/auth/register"}
                                        >
                                            Don't have an account?
                                        </UnstyledButton>
                                        <UnstyledButton
                                            fw={600}
                                            component={Link}
                                            href={"/auth/recovery"}
                                        >
                                            Forgot your password?
                                        </UnstyledButton>
                                    </Flex>
                                </Stack>
                                <Divider
                                    w={"100%"}
                                    color={"#fff"}
                                    styles={{ label: { color: "#fff" } }}
                                    label={"or continue with"}
                                />
                                <Button
                                    leftSection={<Icon icon="logos:google-icon" />}
                                    w={"100%"}
                                    color={"gray.8"}
                                >
                                    Google
                                </Button>
                                <Text ta={"center"}>
                                    By clicking continue, you agree to our{" "}
                                    <Text component={Link} href={"/terms-of-service"} span fw={600}>
                                        Terms of Service
                                    </Text>{" "}
                                    and{" "}
                                    <Text component={Link} href={"/privacy-policy"} span fw={600}>
                                        Privacy Policy
                                    </Text>
                                </Text>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}
