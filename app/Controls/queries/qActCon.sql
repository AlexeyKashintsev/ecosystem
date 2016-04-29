/**
 *
 * @author Alexey
 * @name qActCon
 * @public
 */ 
Select * 
From act_tt_con t1
 Inner Join eco_actions t on t1.action = t.eco_actions_id
 Where (:timer = t1.timer or :timer is null)
 and (:triger = t1.triger or :triger is null)
 and (:triger is not null or :timer is not null)