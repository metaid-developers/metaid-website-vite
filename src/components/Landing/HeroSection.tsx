import { Button, Container, Group, Text, Title, Image, useMantineColorScheme } from "@mantine/core";
import { IconArrowRight, IconStar } from "@tabler/icons-react";

import classes from "./HeroSection.module.css";
import cls from "classnames";
import { useNavigate } from "react-router-dom";
export function HeroSection() {
	const navigate = useNavigate();
	const { colorScheme } = useMantineColorScheme();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				<Image
					src={colorScheme === "dark" ? "/logo_metaid_bai.png" : "/logo_metaid.png"}
					alt="image"
					w={400}
					h="auto"
				/>
				<Title className={cls(classes.subtitle, { "text-white": colorScheme === "dark" })}>
					Cross-Chain DID Protocol Born for Web3
				</Title>

				<div className={cls(classes.description, "mt-7")}>
					<Text>MetaID Brings Us Into The Web3 New Era</Text>
					<Text>
						Where 7 Billion Users Can Truly Own Their Data And Data Between Apps Can Be
						Interoperable.
					</Text>
				</div>

				<Group mt={40}>
					<Button
						size="lg"
						className={classes.control}
						onClick={() => {
							navigate("/dashboard");
						}}
						rightSection={<IconArrowRight />}
					>
						Try It Now
					</Button>
					<Button
						variant="outline"
						size="lg"
						className={classes.control}
						onClick={() => {
							// open github
							window.open("https://github.com/orgs/MetaID-Labs/repositories");
						}}
						rightSection={<IconStar />}
					>
						Give a Star
					</Button>
				</Group>
			</div>
		</Container>
	);
}
