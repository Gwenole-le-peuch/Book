function kalman_filter(mu, P, F,Q,B,u,z,H,R)
{
	// Tensor initialisation 
	mup = tf.tensor();
	pp = tf.tensor();
	zp = tf.tensor();
	epsilon = tf.tensor();
	Sk = tf.tensor();
	K = tf.tensor();
	new_mu =  tf.tensor();
	
	// Prediction 
	
	mup = F.dot(mu) + B.dot(u)
	pp_1 = F.dot(P)
	
	pp_2 = pp_1.dot(F.transpose()).add(Q)
	
	// Update 
	
	
}
