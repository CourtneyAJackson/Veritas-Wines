# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#child first, parent last
Rating.destroy_all
Wine.destroy_all
User.destroy_all


#parent first, child last
@user1 = User.create!(username: 'Ashley', email: 'ashley@email.com', password: '123456' )
@user2 = User.create!(username: 'John', email: 'john@email.com', password: '654321' )


 @wines1 = Wine.create!({name: 'Layer Cake', year: '2020', price: '18.99', description: 'Big, brooding, black fruit, then rich earth, truffles and dark cocoa are at the front. The Sea of Stones vineyard is at its core, always evident with the thread of minerality that the deep alluvial cobblestones lend. This wine is elegant in the mouth with fresh-picked blackberries, simmering chocolate sauce on the stove.', img: 'http://library.bevnetwork.com/bottles/540/173345.jpg'})
 @wines2 = Wine.create!({name: 'Far Niente Chardonnay', year: '2019', price: '49.99', description: 'Napa, CA- A blend of superlative estate vineyards, 100% barrel fermented and aged in French oak. Aromas of melon, hazelnut, orange, and spice are complimented with toasty shadings. Layered palate of fig and citrus fruit with impressive length and a mouthwatering finish.', img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hdf/h74/12343402889246.png'})
 @wines3 = Wine.create!({name: 'Taylor Fladgate 40 Yr Tawny', year: '2010', price: '199.99', description: 'A superb wine, elegance and weight combined magisterially. It has all the right mature flavors, ripe fruit, intense marmalade and concentration. This is a wine with a great reputation, and the taste does not let that reputation down.', img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h4a/hd9/12291709173790.png'})
 @wines4 = Wine.create!({name: 'Penfolds Cabernet Sauvignon', year: '2019', price: '83.99', description: 'An amalgam of redcurrant and blackcurrant aromas with cedary and leafy tones, dark berries and pepper and plenty of oak strut. The palate has a deep vein of black-fruit flavors, as well as plum and chocolate.', img: 'https://wineparity.com/wp-content/uploads/2021/09/2019-Penfolds-Cabernet-Sauvignon-Bin-407.png'})
 @wines5 = Wine.create!({name: 'Sonoma Coast', year: '2019', price: '25.00', description: 'Densely colored with intense aromas of luscious black cherry, forest floor and hints of baking spice that emerge from the glass. Its elegant mouth-filling texture nicely balances fresh acidity and silky-smooth tannins', img: 'https://www.lacrema.com/wp-content/uploads/2015/10/NV-SoCo-Pinot.png'})
 @wines6 = Wine.create!({name: 'Macchia Zinfandel Mischievous Lodi', year: '2019', price: '25.00', description: 'Lodi, CA- This old vine Zinfandel is a blend of five different old vine vineyards, resulting in a classic fruit-forward wine that is the centerpiece of all great Lodi wines. The rich, ripe berry flavors are highlighted with a subtle hint of soft vanilla-oak. Pair with veal or red meat.', img: 'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h09/h01/15078178750494.png'})
 @wines7 = Wine.create!({name: 'The Prisoner Red Blend', year: '2019', price: '28.99', description: 'California - This red blend shows aromas of ripe cherry and cedar with hints of rose petal and sweet oak. The lovely entry leads into a savory mid palate. Ripe fig and black currant dominate the finish with soft well integrated tannins.', img: 'https://cdn.shopify.com/s/files/1/0415/7908/5983/products/ThePrisoner_Cabernet_500_360x.png?v=1628800627'})
 @wines8 = Wine.create!({name: 'Justin Justification', year: '2016', price: '59.99', description: 'Begins quite subtly on the nose, with aromas of berry, mint and oak. Polished tannins frame the palate, where flavors of black cherry, espresso bean and dried mint arise.', img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h10/hd7/11312530325534.png'})
 @wines9 = Wine.create!({name: 'Belle Glos Pinot Noir Clark and Telephone', year: '2019', price: '49.99', description: 'Santa Maria Valley, Santa Barbara, CA- Aromas of plum, brown spice turn to sweet caramel. Flavors extend on the bouquet, leading to cranberry, spice and blackberry. The firm acidity and soft tannins make this a sure winner. A perfect combination of old and new world styles. Vegan', img: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h68/h37/13213275553822.png'})
 
 Rating.create!({ rank: '5', user: @user1, wine: @wines1})
 Rating.create!({ rank: '3', user: @user1, wine: @wines3})
 Rating.create!({ rank: '1', user: @user1, wine: @wines4})
 Rating.create!({ rank: '5', user: @user1, wine: @wines5})
 Rating.create!({ rank: '2', user: @user1, wine: @wines6})
 Rating.create!({ rank: '4', user: @user1, wine: @wines7})
 Rating.create!({ rank: '3', user: @user1, wine: @wines8})

puts "#{Wine.count} wines created!"

puts "#{Rating.count} ratings created!"

puts "#{User.count} users created!"


