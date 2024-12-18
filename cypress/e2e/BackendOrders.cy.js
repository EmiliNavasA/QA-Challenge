
describe('CRUDS', () => {

  let api;

  it('GET ', () => {
    api= cy.request('http://localhost:5044/api/Order')
    api.its('status').should('equal', 200)
  })


  //1
  it('GET By ID' ,  () =>{
    let  id = 9;
    api = cy.request(`http://localhost:5044/api/Order/${id}`).then((response =>{
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', id); 
        expect(response.body).to.have.property('productName');
        expect(response.body).to.have.property('quantity');
        expect(response.body).to.have.property('status');
    }))
  })

  // 2 
it('POST Unique', () =>{
  cy.request({
    method:'POST',
    url:'http://localhost:5044/api/Order',
    body:{
      'id': 123,
      'productName': 'Order one',
      'quantity': '2',
      'status': 'In progress'
    }
  }).then(response =>{
    expect(response.status).to.equal(201)
  })
})

// 3
it('POST Multiple', ()  =>{

  for(let x = 1 ; x<=10; x++){
    let order= 'Order ' + (0+x)
    let quantityRandom = Math.floor(Math.random () * 10 )+1
    let status = ['Pending', 'In progress' , 'Done']
    let statusRandom = status [Math.floor(Math.random () * status.length) ] 

     cy.request({
      method:'POST',
      url:'http://localhost:5044/api/Order',
      body:{
        'id': x,
        'productName': order,
        'quantity': quantityRandom,
        'status': statusRandom
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
    url: 'http://localhost:5044/api/Order/5',
    body:{
      'productName': 'Order 5',
      'quantity': '8',
      'status': 'In progress'
    }
  }).then(response =>{
    expect(response.status).to.eql(204)
  })
  })

  //5

it(' DELETE Unique' , () =>{
  cy.request({
    method:'DELETE',
    url: 'http://localhost:5044/api/Order/10',
  }).then(response =>{
    expect(response.status).to.eql(204)
  })
})


// 6
it('DELETE Multiple', () => {
  for( let x=1; x<=3; x++){ 
      cy.request({
        method:'DELETE',
        url:`http://localhost:5044/api/Order/${x}`,
      }).then(response =>{
        expect(response.status).to.eql(204)
      })
    }
      })
})