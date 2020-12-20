const express= require('express');
const router  = express.Router();
const {ensureAuth}= require('../middleware/auth')
const Story = require('../models/Story')

//Show add page
//get to /stories/add
router.get('/add', ensureAuth,(req,res)=>{
 res.render('stories/add')
})

router.post('/', ensureAuth, async (req,res) =>{
 try{
  //req.body will return the data from the submit action in add form
  //need middleware see app.js
  req.body.user = req.user.id //added user to storie object
  await Story.create(req.body)
  res.redirect('/dashboard')
 }catch(err){
  console.log(err);
  res.render('error/500')
 }
})

//Show all Stories
router.get('/', ensureAuth, async (req,res)=>{
 try{
  // populate let you reeference documents in other collections like a lookup
  const stories = await Story.find({status: 'public'}).populate('user').sort({createdAt: 'desc'}).lean()
  res.render('stories/index', {
   stories,
  })
 }catch(err){
  console.log(err);
  res.render('erro/500')
 }
})


module.exports = router