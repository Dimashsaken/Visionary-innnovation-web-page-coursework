function showZone(zone) {
    const zones = ['technology', 'innovation', 'ecology'];
    zones.forEach(z => {
        const heading = document.querySelector(`.zone-heading:nth-of-type(${zones.indexOf(z) + 1})`);
        const zoneDiv = document.querySelector(`.${z}-zone`);
        if (z === zone) {
            zoneDiv.style.display = 'block';
            heading.classList.add('active-heading');
            heading.classList.remove('inactive-heading');
        } else {
            zoneDiv.style.display = 'none';
            heading.classList.remove('active-heading');
            heading.classList.add('inactive-heading');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    showZone('technology');

   
    document.querySelectorAll('.rank-button').forEach(button => {
        button.addEventListener('click', function() {
            const form = button.closest('form');
            const company = form.querySelector('label').innerText;
            const rankInput = form.querySelector('input').value;
            const rank = parseInt(rankInput);

            console.log(`Company: ${company}, Rank Input: ${rankInput}, Parsed Rank: ${rank}`); 

            if (!rankInput || isNaN(rank)) {
                alert("Please enter the rank of chosen company");
                return;
            }
            if (rank < 1 || rank > 10) {
                alert("Please enter the rank of chosen company between 1 and 10");
                return;
            }

            const tableBody = document.getElementById('choices-table-body');
            const existingRows = Array.from(tableBody.rows);
            const existingCompanies = existingRows.map(row => row.cells[1].innerText);
            const existingRanks = existingRows.map(row => row.cells[2].innerText);

            if (existingCompanies.includes(company)) {
                alert("You have already chosen this company");
                return;
            }
            if (existingRanks.includes(rank.toString())) {
                alert("You have already chosen this rank");
                return;
            }

            const ordinal = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
            alert(`You have chosen ${company} as your ${ordinal[rank - 1]} chosen company in ${form.dataset.zone} successfully`);

            const newRow = tableBody.insertRow();
            newRow.insertCell(0).innerText = form.dataset.zone;
            newRow.insertCell(1).innerText = company;
            newRow.insertCell(2).innerText = rank;

            updateTable();
        });
    });

  
    document.getElementById('submit-button').addEventListener('click', function() {
        const tableBody = document.getElementById('choices-table-body');
        if (tableBody.rows.length === 0) {
            document.getElementById('last-change-time').innerText = "You have not chosen any company.";
            return;
        }

        const gaps = [];
        for (let i = 1; i <= 10; i++) {
            if (!Array.from(tableBody.rows).some(row => row.cells[2].innerText == i)) {
                gaps.push(i);
            }
        }

        if (gaps.length > 0) {
            document.getElementById('last-change-time').innerText = `You have not chosen your ${gaps.join(', ')}, you cannot leave any gap between your chosen companies.`;
        } else {
            document.getElementById('last-change-time').innerText = `You have successfully submitted your application at ${new Date().toLocaleString()}.`;
        }
    });

    
    document.getElementById('clear-button').addEventListener('click', function() {
        const tableBody = document.getElementById('choices-table-body');
        tableBody.innerHTML = '';
        updateTable();
    });

  
    function updateTable() {
        const tableBody = document.getElementById('choices-table-body');
        const totalCount = document.getElementById('total-count');
        const lastChangeTime = document.getElementById('last-change-time');

        totalCount.innerText = tableBody.rows.length;
        lastChangeTime.innerText = `Last change: ${new Date().toLocaleString()}`;
    }
});