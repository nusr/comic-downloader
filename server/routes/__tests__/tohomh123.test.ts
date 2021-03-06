import superTest from 'supertest';
import koaServer from '../../index';
import { ISearchItem } from '../../type';

const { server } = koaServer;
const request = superTest(server);
afterAll(() => {
  server.close();
});

describe('test', () => {
  it('test /tohomh123 search', async () => {
    const name = '火影';
    const response: superTest.Response = await request.post('/tohomh123').send({ type: 'search', name });
    const data: ISearchItem[] = response.body;
    expect(data.every((item: ISearchItem) => item.title.includes(name))).toBeTruthy();
  });

  it('test /tohomh123 chapter', async () => {
    const response: superTest.Response = await request.post('/tohomh123').send({
      'type': 'chapter',
      'name': 'https://www.tohomh123.com/huoyingrenzhejiezhishu/',
    });
    expect(response.body.length).toBeGreaterThan(6);
  });
});
