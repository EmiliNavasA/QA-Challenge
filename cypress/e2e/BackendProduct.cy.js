
describe('CRUDS', () => {

  let api;

  it.only('GET ', () => {
    api= cy.request('http://localhost:5044/api/Product')
    api.its('status').should('equal', 200)
  })


  // 1
  it.only('GET By ID' ,  () =>{
    let  id = 9;
    api = cy.request(`http://localhost:5044/api/Product/${id}`).then((response =>{
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', id); 
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('price');
    }))
  })

  // 2 
it('POST Unique', () =>{
  cy.request({
    method:'POST',
    url:'http://localhost:5044/api/Product',
    body:{
      'id': 5,
      'name': 'Product one',
      'price': '3200'
    }
  }).then(response =>{
    expect(response.status).to.equal(201)
  })
})

// 3
it('POST Multiple', ()  =>{

  for(let x = 1 ; x<=5; x++){
    let product= 'Product ' + (0+x)
     cy.request({
      method:'POST',
      url:'http://localhost:5044/api/Product',
      body:{
        'id': x,
        'name': product ,
        'price': '150'
      }
    }).then(response =>{
      expect(response.status).to.eql(201)
    } )
  }
})

//4
it('PUT', () => {
  cy.request({
    method:'PUT',
    url: 'http://localhost:5044/api/Product/5',
    body:{
      'id': 7,
      'name': 'Product 7',
      'price': '150'
    }
  }).then(response =>{
    expect(response.status).to.eql(200)
  })
  })

  //5

it(' DELETE Unique' , () =>{
  cy.request({
    method:'DELETE',
    url: 'http://localhost:5044/api/Product/5',
  }).then(response =>{
    expect(response.status).to.eql(200)
  })
})


// 6
it('DELETE Multiple', () => {
  for( let x=2; x<=9; x++){ 
      cy.request({
        method:'DELETE',
        url:`http://localhost:5044/api/Product/${x}`,
      }).then(response =>{
        expect(response.status).to.eql(200)
      })
    }
      })
})