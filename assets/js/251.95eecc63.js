(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{930:function(s,e,a){"use strict";a.r(e);var r=a(6),t=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"常用sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用sql"}},[s._v("#")]),s._v(" 常用sql")]),s._v(" "),e("p",[s._v("加sout能打印是因为JVM本身就会尽力保证内存的可见性  而println方法是加锁的 执行这个方法会让CPU执行变慢，这样就有空去取最新值并刷新内存了")]),s._v(" "),e("p",[s._v("计算机专业四大金刚：数据结构，计算机组成原理，计算机网络，操作系统。这是内功")]),s._v(" "),e("p",[s._v("select * from all_tab_comments -- 查询所有用户的表,视图等。"),e("br"),s._v("\nselect * from user_tab_comments -- 查询本用户的表,视图等。"),e("br"),s._v("\nselect * from all_col_comments  --查询所有用户的表的列名和注释。"),e("br"),s._v("\nselect * from user_col_comments -- 查询本用户的表的列名和注释。"),e("br"),s._v("\nselect * from all_tab_columns --查询所有用户的表的列名等信息。"),e("br"),s._v("\nselect * from user_tab_columns --查询本用户的表的列名等信息。")]),s._v(" "),e("h2",{attrs:{id:"查看所有用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有用户"}},[s._v("#")]),s._v(" 查看所有用户")]),s._v(" "),e("p",[s._v("select * from dba_users;"),e("br"),s._v("\nselect * from all_users;"),e("br"),s._v("\nselect * from user_users;")]),s._v(" "),e("h2",{attrs:{id:"查看用户或角色系统权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看用户或角色系统权限"}},[s._v("#")]),s._v(" 查看用户或角色系统权限")]),s._v(" "),e("p",[s._v("(直接赋值给用户或角色的系统权限)")]),s._v(" "),e("p",[s._v("select * from dba_sys_privs;")]),s._v(" "),e("h2",{attrs:{id:"查看当前用户所拥有的权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前用户所拥有的权限"}},[s._v("#")]),s._v(" 查看当前用户所拥有的权限")]),s._v(" "),e("p",[s._v("select * from user_sys_privs;")]),s._v(" "),e("h2",{attrs:{id:"查看角色所包含的权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看角色所包含的权限"}},[s._v("#")]),s._v(" 查看角色所包含的权限")]),s._v(" "),e("blockquote",[e("p",[s._v("只能查看登陆用户拥有的角色"),e("br"),s._v("\nSQL>select * from role_sys_privs;")])]),s._v(" "),e("h2",{attrs:{id:"查看用户对象权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看用户对象权限"}},[s._v("#")]),s._v(" 查看用户对象权限")]),s._v(" "),e("p",[s._v("select * from dba_tab_privs;"),e("br"),s._v("\nselect * from all_tab_privs;"),e("br"),s._v("\nselect * from user_tab_privs;")]),s._v(" "),e("h2",{attrs:{id:"查看所有角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有角色"}},[s._v("#")]),s._v(" 查看所有角色")]),s._v(" "),e("p",[s._v("select * from dba_roles;")]),s._v(" "),e("h2",{attrs:{id:"查看用户或角色所拥有的角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看用户或角色所拥有的角色"}},[s._v("#")]),s._v(" 查看用户或角色所拥有的角色")]),s._v(" "),e("p",[s._v("select * from dba_role_privs;"),e("br"),s._v("\nselect * from user_role_privs;")]),s._v(" "),e("h2",{attrs:{id:"查看哪些用户有sysdba或sysoper系统权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看哪些用户有sysdba或sysoper系统权限"}},[s._v("#")]),s._v(" 查看哪些用户有sysdba或sysoper系统权限")]),s._v(" "),e("h2",{attrs:{id:"查询时需要相应权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询时需要相应权限"}},[s._v("#")]),s._v(" 查询时需要相应权限")]),s._v(" "),e("p",[s._v("select * from V$PWFILE_USERS\nSQLPlus中查看一个用户所拥有权限\nSQL>select * from dba_sys_privs where grantee='username';\n其中的username即用户名要大写才行。比如：")]),s._v(" "),e("p",[s._v("SQL>select * from dba_sys_privs where grantee='TOM';")]),s._v(" "),e("h2",{attrs:{id:"oracle删除指定用户所有表的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oracle删除指定用户所有表的方法"}},[s._v("#")]),s._v(" Oracle删除指定用户所有表的方法")]),s._v(" "),e("p",[s._v("select 'Drop table '||table_name||';' from all_tables\nwhere owner='要删除的用户名(注意要大写)';")]),s._v(" "),e("h2",{attrs:{id:"删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[s._v("#")]),s._v(" 删除用户")]),s._v(" "),e("p",[s._v("drop user user_name cascade;\n如：drop user SMCHANNEL CASCADE")]),s._v(" "),e("h2",{attrs:{id:"获取当前用户下所有的表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取当前用户下所有的表"}},[s._v("#")]),s._v(" 获取当前用户下所有的表")]),s._v(" "),e("p",[s._v("select table_name from user_tables;")]),s._v(" "),e("h2",{attrs:{id:"删除某用户下所有的表数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除某用户下所有的表数据"}},[s._v("#")]),s._v(" 删除某用户下所有的表数据")]),s._v(" "),e("p",[s._v("select 'truncate table  ' || table_name from user_tables;")]),s._v(" "),e("h2",{attrs:{id:"只查询用户和密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#只查询用户和密码"}},[s._v("#")]),s._v(" 只查询用户和密码")]),s._v(" "),e("p",[s._v("select username,password from dba_users;")]),s._v(" "),e("h2",{attrs:{id:"查询当前用户信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询当前用户信息"}},[s._v("#")]),s._v(" 查询当前用户信息")]),s._v(" "),e("p",[s._v("select * from dba_ustats;")]),s._v(" "),e("h2",{attrs:{id:"查询用户可以访问的视图文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询用户可以访问的视图文本"}},[s._v("#")]),s._v(" 查询用户可以访问的视图文本")]),s._v(" "),e("p",[s._v("select * from dba_varrays;")]),s._v(" "),e("h2",{attrs:{id:"查询数据库中所有视图的文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询数据库中所有视图的文本"}},[s._v("#")]),s._v(" 查询数据库中所有视图的文本")]),s._v(" "),e("p",[s._v("select * from dba_views;")]),s._v(" "),e("h2",{attrs:{id:"查看当前用户的缺省表空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前用户的缺省表空间"}},[s._v("#")]),s._v(" 查看当前用户的缺省表空间")]),s._v(" "),e("p",[s._v("select username,default_tablespace from user_users;")]),s._v(" "),e("h2",{attrs:{id:"查看当前用户的角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前用户的角色"}},[s._v("#")]),s._v(" 查看当前用户的角色")]),s._v(" "),e("p",[s._v("select * from user_role_privs;")]),s._v(" "),e("h2",{attrs:{id:"查看当前用户的系统权限和表级权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前用户的系统权限和表级权限"}},[s._v("#")]),s._v(" 查看当前用户的系统权限和表级权限")]),s._v(" "),e("p",[s._v("select * from user_sys_privs;\nselect * from user_tab_privs;")]),s._v(" "),e("h2",{attrs:{id:"查看用户下所有的表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看用户下所有的表"}},[s._v("#")]),s._v(" 查看用户下所有的表")]),s._v(" "),e("p",[s._v("select * from user_tables;")]),s._v(" "),e("h2",{attrs:{id:"显示用户信息-所属表空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示用户信息-所属表空间"}},[s._v("#")]),s._v(" 显示用户信息，所属表空间")]),s._v(" "),e("p",[s._v("select default_tablespace,temporary_tablespace from dba_users;")]),s._v(" "),e("h2",{attrs:{id:"显示当前会话所具有的权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示当前会话所具有的权限"}},[s._v("#")]),s._v(" 显示当前会话所具有的权限")]),s._v(" "),e("p",[s._v("select * from session_privs;")]),s._v(" "),e("h2",{attrs:{id:"显示指定用户所具有的系统权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示指定用户所具有的系统权限"}},[s._v("#")]),s._v(" 显示指定用户所具有的系统权限")]),s._v(" "),e("p",[s._v("select * from dba_sys_privs;")]),s._v(" "),e("h2",{attrs:{id:"显示特权用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示特权用户"}},[s._v("#")]),s._v(" 显示特权用户")]),s._v(" "),e("p",[s._v("select * from v$pwfile_users;")]),s._v(" "),e("h2",{attrs:{id:"查看名称包含log字符的表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看名称包含log字符的表"}},[s._v("#")]),s._v(" 查看名称包含log字符的表")]),s._v(" "),e("p",[s._v("select object_name,object_id from user_objects where instr(object_name,'log')>0;")]),s._v(" "),e("h2",{attrs:{id:"查看某表的创建时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看某表的创建时间"}},[s._v("#")]),s._v(" 查看某表的创建时间")]),s._v(" "),e("p",[s._v("select object_name,created from user_objects where object_name='ZW_YINGYEZ';")]),s._v(" "),e("h2",{attrs:{id:"查看某表的大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看某表的大小"}},[s._v("#")]),s._v(" 查看某表的大小")]),s._v(" "),e("p",[s._v("select sum(bytes)/(1024*1024) tablesize from user_segments\nwhere segment_name='ZW_YINGYEZ';")]),s._v(" "),e("h2",{attrs:{id:"查看放在oracle的内存区里的表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看放在oracle的内存区里的表"}},[s._v("#")]),s._v(" 查看放在ORACLE的内存区里的表")]),s._v(" "),e("p",[s._v("select table_name,cache from user_tables where instr(cache,'Y')>0;")]),s._v(" "),e("h2",{attrs:{id:"查看索引个数和类别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看索引个数和类别"}},[s._v("#")]),s._v(" 查看索引个数和类别")]),s._v(" "),e("p",[s._v("select index_name,index_type,table_name from user_indexes order by table_name;")])])}),[],!1,null,null,null);e.default=t.exports}}]);