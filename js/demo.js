$(function(){
	var tag_data = [
		{id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
		{id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
		{id:3 ,name:'Detroit Pistons',desc:'底特律活塞'},
		{id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者'},
		{id:5 ,name:'Milwaukee Bucks',desc:'密尔沃基雄鹿'},
		{id:6 ,name:'Brooklyn Nets',desc:'布鲁克林篮网'},
		{id:7 ,name:'Boston Celtics',desc:'波士顿凯尔特人'},
		{id:8 ,name:'New York Knicks',desc:'纽约尼克斯'},
		{id:9 ,name:'Philadelphia 76ers',desc:'费城76人'},
		{id:10,name:'Toronto Raptors',desc:'多伦多猛龙'},
		{id:11,name:'Atlanta Hawks',desc:'亚特兰大老鹰'},
		{id:12,name:'Charlotte Hornets',desc:'夏洛特黄蜂'},
		{id:13,name:'Miami Heat',desc:'迈阿密热火'},
		{id:14,name:'Orlando Magic',desc:'奥兰多魔术'},
		{id:15,name:'Washington Wizards',desc:'华盛顿奇才'},
		{id:16,name:'Denver Nuggets',desc:'丹佛掘金'},
		{id:17,name:'Minnesota Timberwolves',desc:'明尼苏达森林狼'},
		{id:18,name:'Oklahoma City Thunder',desc:'俄克拉荷马雷霆'},
		{id:19,name:'Portland Trail Blazers',desc:'波特兰开拓者'},
		{id:20,name:'Utah Jazz',desc:'犹他爵士'},
		{id:21,name:'Golden State Warriors',desc:'金州勇士'},
		{id:22,name:'Los Angeles Clippers',desc:'洛杉矶快船'},
		{id:23,name:'Los Angeles Lakers',desc:'洛杉矶湖人'},
		{id:24,name:'Phoenix Suns',desc:'菲尼克斯太阳'},
		{id:25,name:'Sacramento Kings',desc:'萨克拉门托国王'},
		{id:26,name:'Dallas Mavericks',desc:'达拉斯小牛'},
		{id:27,name:'Houston Rockets',desc:'休斯顿火箭'},
		{id:28,name:'Memphis Grizzlies',desc:'孟菲斯灰熊'},
		{id:29,name:'New Orleans Pelicans',desc:'新奥尔良鹈鹕'},
		{id:30,name:'San Antonio Spurs',desc:'圣安东尼奥马刺'}
	];
	$('#selectPage').selectPage({
		showField : 'name',
		keyField : 'id',
		data : tag_data
	});
	$('#selectPage1').selectPage({
		showField : 'desc',
		keyField : 'id',
		data : tag_data,
        andOr : 'OR',
        orderBy : ['id desc']
	});
	$('#selectPage2').selectPage({
		showField : 'name',
		keyField : 'id',
		pageSize : 5,
		data : tag_data,
		formatItem : function(data){
			return data.desc + '(' + data.name + ')';
		}
	});
	$('#selectPage3').selectPage({
		showField : 'name',
		keyField : 'id',
		data : tag_data,
		multiple : true
	});
	$('#selectPage4').selectPage({
		showField : 'name',
		keyField : 'id',
		data : tag_data,
		multiple : true,
		maxSelectLimit : 3,
		selectToCloseList : false
	});
	$('#selectPage5').selectPage({
		showField : 'name',
		keyField : 'id',
		data : tag_data,
		multiple : true,
		eSelect : function(data){
			$('#callbackLog').append(data.desc + '(' + data.name + ')<br/>');
		}
	});
	/*
	$('#selectPage6').selectPage({
		showField : 'name',
		keyField : 'id',
		data : $webroot + 'user/loadUserListDatatable',
		eAjaxSuccess : function(d){
			var result;
			if(d) result = d.values.gridResult;
			else result = undefined;
			return result;
		}
	});
	*/
	$('#selectPage7').selectPage({
		showField : 'name',
		keyField : 'id',
		data : tag_data
	});
	$('#func1').click(function(){
		alert($('#selectPage').selectPageText());
	});
	$('#func2').click(function(){
		$('#selectPage').selectPageClear();
	});
	$('#func3').click(function(){
		$('#selectPage').val('20');
		$('#selectPage').selectPageRefresh();
	});
	$('#btnModifyDataSource').click(function(){
		var data = [
			{id:1 ,name:'北京'},{id:2 ,name:'上海'},
			{id:3 ,name:'广州'},{id:4 ,name:'深圳'},
			{id:5 ,name:'成都'},{id:6 ,name:'重庆'},
			{id:7 ,name:'福州'},{id:8 ,name:'长沙'},
			{id:9 ,name:'西安'},{id:10,name:'浙江'}
		];
		$('#selectPage7').selectPageData(data);
	});
	$('#selectPageSelectOnly').selectPage({
        showField : 'name',
        keyField : 'id',
        data : tag_data,
        selectOnly : true,
        pagination : false,
        multiple : true
    });
});