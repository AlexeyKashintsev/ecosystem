/**
 * @public
 * @author minya92
 * @name qDevices
 * @writable eco_devices
 */ 
Select * 
From eco_devices t1
 Inner Join eco_dev_types t on t1.type = t.eco_dev_types_id