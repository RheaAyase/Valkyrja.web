import sinon from "sinon";
import {mount, shallowMount} from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import {expect} from "chai";
import PublicRoleSelector from "components/EditGuild/Sections/RoleAssignment/PublicRoleSelector/PublicRoleSelector";
import PublicRoleSelectorGroup from "components/EditGuild/Sections/RoleAssignment/PublicRoleSelector/PublicRoleSelectorGroup";
import {PublicRole} from "models/PublicRole";
import PanelList from "components/shared/structure/PanelList/PanelList";

let localVue = Vue.use(Vuex);

describe("PublicRoleSelector", function () {
    let wrapper;
    let actions;
    let store;
    let state;
    let getters;
    let propsData;
    let types;

    beforeEach(function () {
        propsData = {};
        actions = {
            addPublicRole: sinon.stub(),
            removeRole: sinon.stub(),
        };
        types =  {
            Public: 1,
            Member: 2,
            SubModerator: 3,
            Moderator: 4,
            Admin: 5
        };
        state = {
            roles: [],
            publicGroups: [],
            availableRoles: [],
            addedRoles: [],
            selectedType: types.Public,
        };
        getters = {
            availableRoles: () => state.availableRoles,
            addedRoles: () => () => state.addedRoles,
            publicGroups: () => state.publicGroups,
        };
        store = new Vuex.Store({
            modules: {
                roleSelector: {
                    namespaced: true,
                    state,
                    actions,
                    getters
                }
            }
        });
        wrapper = shallowMount(PublicRoleSelector, {propsData, store, localVue});
    });

    it("should have 1 PublicRoleSelectorGroup", function () {
        expect(wrapper.findAll(PublicRoleSelectorGroup)).to.have.length(1);
    });

    it("should have 2 PanelLists", function () {
        expect(wrapper.findAll(PanelList)).to.have.length(2);
    });

    it("sends true to PublicRoleSelectorGroup isActive prop if Public type is selected", function () {
        state.selectedType = types.Public;
        expect(wrapper.find(PublicRoleSelectorGroup).attributes("isactive")).to.equal("true");
    });

    it("sends false to PublicRoleSelectorGroup isActive prop if non-Public type is selected", function () {
        for (let typesKey in types) {
            if (state.selectedType === types.Public) continue;
            state.selectedType = types[typesKey];
            expect(wrapper.find("roleselectorgroup-stub").attributes("isactive")).to.equal(false);
        }
    });

    it("should not dispatch add role when availableRoles is not called", function () {
        expect(actions.addPublicRole.calledOnce).to.equal(false);
    });

    it("should dispatch add role when availableRoles is called", function () {
        wrapper.vm.availableRoles = "Test";
        expect(actions.addPublicRole.calledOnce).to.equal(true);
    });

    it("should dispatch remove role when addedRoles is called", function () {
        wrapper.vm.addedRoles = "Test";
        expect(actions.removeRole.calledOnce).to.equal(true);
    });

    it("should not dispatch remove role when addedRoles is not called", function () {
        expect(actions.removeRole.calledOnce).to.equal(false);
    });

    it("should display everything in a box", function () {
        expect(wrapper.classes()).to.contain("box");
    });

    it("should have 3 columns in box", function () {
        expect(wrapper.find(".box").findAll(".columns > .column").length).to.equal(3);
    });

    it("should have name of PublicRoleSelector", function () {
        expect(wrapper.name()).to.equal("PublicRoleSelector");
    });
});