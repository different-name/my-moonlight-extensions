import { greeting } from "@moonlight-mod/wp/voiceMessages_someLibrary";

const logger = moonlight.getLogger("voiceMessages/entrypoint");
logger.info("Hello from entrypoint!");
logger.info("someLibrary exports:", greeting);

const natives = moonlight.getNatives("voiceMessages");
logger.info("node exports:", natives);
