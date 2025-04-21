-> The purpose of worker queue is that when a event is pushed into queue from producer,
   the consumers will only get the event one by one.

-> The consumer will be chosen alternative. Eg : if there are two consumers the queue will be processsed 
   one by one not both of them will recieive it 
