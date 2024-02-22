/** Game main entry point */

import {Xpell as _x, XUI} from 'xpell'
import "./style.css"


async function main() {
    _x.verbose()
    _x.info()
    _x.start()
    _x.loadModule(XUI)


    const page = {
        _type:"view", //same as div
        _id:"page",
        _text:"Hello World",
        _parent_element:"game"
    }

    const xpage = XUI.loadObject(page)


}


main()