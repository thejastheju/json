fetch('jsons/summary.json')
    .then(response => response.json())
    .then(data => {
        // Display Summary data as HTML
        document.getElementById("summaryDisplay").innerHTML = jsonToHtml(data.summary);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function jsonToHtml(summaryData) {
    var html = '';
    summaryData.forEach(item => {
        html += '<div class="card comp-card"> <div class="card-body"><div class="row align-items-center"> <div class="col"> <h6 class="m-b-25">' + item.title + '</h6>';
        html += '<h3 class="f-w-700 text-c-blue">' + item.value + '</h3>';
        html += '<p class="m-b-0">' + item.duration +' ('+ item.year + ')</p>';
        html += '</div> <div class="col-auto"> <i class="'+ item.color +'"></i> </div> </div> </div> </div>';
    });
    return html;
}

fetch('jsons/Project_Progress_Summary.json')
    .then(response => response.json())
    .then(data => {
        // Display Summary data as HTML
        document.getElementById("progressDisplay").innerHTML = jsonToprogress(data.project_progress_summary);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function jsonToprogress(project_progress_summaryData) {
    var html = '';
    project_progress_summaryData.forEach(project => {
    	html += '<div class="col-xl-3 col-md-6"><h6>'+ project.title +'</h6>';
    	html += '<h5 class="m-b-30 f-w-700">'+ project.value +'<span class="text-c-green m-l-10">'+ project.percentage +'</span></h5>';
    	html += '<div class="progress"> <div class="progress-bar '+ project.color +'" style="width: '+ project.percent +'%;"></div> </div>';
    	html += '</div>';
	});
    return html;
}

fetch('jsons/Whats_New.json')
    .then(response => response.json())
    .then(data => {
        // Display Summary data as HTML
        document.getElementById("Whats_NewDisplay").innerHTML = jsonToWhats_New(data.what_new_items);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function jsonToWhats_New(Whats_NewDataData) {
    var html = '';
    Whats_NewDataData.forEach(project => {
    	html += '<div class="row p-t-20 p-b-30"> <div class="col-auto text-right update-meta p-r-0">'+ project.img +'</div>';
    	html += '<div class="col p-l-5"> <a href="#!">'+ project.message +'</h6></a>';
    	html += '<p class="text-muted m-b-0">'+ project.created_by +'</p>';
    	html += '</div> </div>';
	});
    return html;
}


fetch('jsons/Latest_Activity.json')
    .then(response => response.json())
    .then(data => {
        // Display Summary data as HTML
        document.getElementById("Latest_ActivityDisplay").innerHTML = jsonToLatest_Activity(data.latest_activity);
        console.log(data.latest_activity);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function jsonToLatest_Activity(Latest_ActivityData) {
    var html = '';
    Latest_ActivityData.forEach(activ => {
    	html += '<div class="row p-t-20 p-b-30"> <div class="col-auto text-right update-meta p-r-0"> <i class="b-primary update-icon ring"></i> </div> <div class="col p-l-5"> <a href="#"><h6>'+ activ.activity_type +'</h6></a>';
    	html += '<p class="text-muted m-b-0">'+ activ.activity +'<a href="'+ activ.activity_type +'" class="text-c-blue"> Read More</a></p>';
    	html += '</div> </div>';
	});
    return html;
    console.log(html);
}

fetch('jsons/New_Products.json')
    .then(response => response.json())
    .then(data => {
        // Display New_Products data as HTML
        document.getElementById("New_ProductsDisplay").innerHTML = jsonTonewproject(data.new_products);
    })
    .catch(error => console.error('Error fetching JSON:', error));

function jsonTonewproject(New_ProductsData) {
    var html = '';

    New_ProductsData.forEach(project => {
        html += '<tr> <td>' + project.name + '</td>';
        html += '<td>' + project.product_code + '</td>';
        html += '<td>' + project.customer +' </td>';
        html += '<td> <label class="label '+ project.st +'">'+ project.status +'</label></td>';
        html += '<td>';
         for (var i = 1 ; i <= 5; i++) { 
         	if (i<=project.rating) {
         		html +='<a href="#!"><i class="fa fa-star f-12 text-c-yellow"></i></a>';
         	}else{
         		html +='<a href="#!"><i class="fa fa-star f-12 text-default"></i></a>';
         	}
        } 
    	html +='</td></tr>';
    });
    return html;
}