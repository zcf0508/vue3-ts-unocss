interface TestReturnType {
  a: number
};

export function testApi() {
  return request<unknown, TestReturnType>({
    url: 'test/url',
    method: 'get',
  });
}

async function test() {
  const res = await testApi();
  console.log(res.a);
}
