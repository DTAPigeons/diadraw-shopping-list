const faker = require('faker');
const puppeteer = require('puppeteer');

const PAGE_URL ="http://localhost:3000/";

let browser;
let page;
let newItem = faker.random.word();

jest.setTimeout(3 * 60 * 1000);

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

beforeAll(async ()=>{

  console.log("before all started");
  browser = await puppeteer.launch({
    headless:false,
    devtools: true
  });

  page = await browser.newPage();

  console.log("before all finished");
})




describe('Page text content', () => {
  test('h1 loads correctly', async () => {

    await page.goto(PAGE_URL);
    await page.waitForSelector('h1');
    
    const html = await page.$eval('h1', e=>e.innerHTML);
    expect(html).toBe('Shopping List');
}, 16000);
});

describe('Shopping List Page interaction', ()=>{


  test('Bought check boxes functioning', async ()=>{
    await page.goto(PAGE_URL);

    for(var i=0;i<3;i++){
      await wait(1000);
      await page.waitForSelector('.check-box');
      await page.click('.check-box');
    }
  }, 9000000);
  
})


describe('Shopping list submisions',()=>{
  test('Add item to shopping list', async()=>{
    

    await page.goto(PAGE_URL);
    await page.waitForSelector('#add-item-button');
    await Promise.all([
      page.waitForNavigation(),
      page.click('#add-item-button')
    ]);
  
    await page.waitForSelector('#name-input');
    await page.click('#name-input');
    await page.type('#name-input', newItem);
  
    await Promise.all([
      page.waitForNavigation(),
      page.click('#save-item-button')
    ]);

    await page.waitForSelector('.list-item-name');
    const items = await page.$$('.list-item-name');
    let itemExists = false;
    for(let i=0;i<items.length;i++){
      let itemName = await items[i].evaluate(node=>node.innerHTML);
      if(itemName==newItem){
        itemExists = true;
      }
    }
    expect(itemExists).toBe(true);
  }, 9000000)
})

afterAll(() => {
  browser.close()
})