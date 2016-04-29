/**
 *
 * @author Алексей
 * @name qActionsByDevice
 * @public
 */ 
Select * 
From eco_actions t1
 Where :device_id = t1.device_id