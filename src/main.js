import Epage from './design/index.js'
import TypeBuilder from './modules/store/TypeBuilder'
import * as setting from './modules/widget/setting'
import {
  Rule,
  EpWorker,
  EpEvent,
  helper,
  constant,
  Store,
  schema,
  widget,
  Logic
} from './modules'

Epage.Rule = Rule
Epage.Worker = EpWorker
Epage.Event = EpEvent
Epage.Store = Store
Epage.TypeBuilder = TypeBuilder
Epage.constant = constant
Epage.helper = helper
Epage.schema = schema
Epage.widget = widget
Epage.setting = setting
Epage.Logic = Logic

export default Epage
