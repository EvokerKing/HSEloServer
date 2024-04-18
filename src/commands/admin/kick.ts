import Discord from "discord.js";
import { SlashCommand, SlashCommandEvent } from "strike-discord-framework/dist/slashCommand.js";
import { SArg } from "strike-discord-framework/dist/slashCommandArgumentParser.js";

import { Application } from "../../application.js";

class Kick extends SlashCommand {
	name = "kick";
	description = "Kicks a user thats currently on the server";

	async run({ interaction, framework, app }: SlashCommandEvent<Application>, @SArg() userId: string) {
		if (interaction.user.id != "272143648114606083") {
			await interaction.reply(framework.error("No"));
			return;
		}

		app.api.sendKickUserRequest(userId);

		return framework.success(`Sent kick request for user ${userId}`);
	}
}

export default Kick;
