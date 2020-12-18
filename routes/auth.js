const express= require('express');
const passport  = require('passport')
const router  = express.Router();

// Auth with google
// Get request to /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))
// Google auth callback
//Route Get request to auth/google/callback
//Callback that will be called when fails or sucess
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res)=>{
 res.redirect('/dashboard')
})

module.exports = router