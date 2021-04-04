import { FastifyRequest, FastifyReply } from 'fastify';
import boom from 'boom';

class IndexController {
  public index = (req: FastifyRequest, rep: FastifyReply): void => {
    try {
        rep.status(200).send();
    } catch (error) {
        throw boom.boomify(error);
    }
  };
}

export default IndexController;